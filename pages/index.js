import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ article, links, preview, hero }) {
  return (
    <>
      <Head>
        <title>My page</title>
        <meta name='description' content='Arkane Digtal Next.js CMS Demo' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout links={links}></Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const article = await getArticle(preview);
  const contacts = await getContacts(preview);
  const links = await getLinks(preview);
  const hero = await getHero(preview);
  return {
    props: { article, links, preview, hero },
  };
}

async function fetchAPI(query) {
  return fetch(process.env.SITECORE_PREVIEW_ENDPOINT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-GQL-Token": process.env.PREVIEW_API_KEY,
    },
    body: JSON.stringify({ query }),
  }).then((response) => {
    return response.json();
  });
}

export async function getArticle(preview) {
  const result = await fetchAPI(
    `{ 
      articles: allSampleArticle
      {
        results {
          title
          summary
          body
        }
      }
    }`
  );
  return result.data.articles.results[0];
}

export async function getHero(preview) {
  const result = await fetchAPI(
    `{
      contentBanner( id:"AVwSP1ngw0aaESG6uNZQZQ") {
        header
        description
        content
        bannerImage {
          results {
            fileUrl
          }
        }
      }
    }`
  );
  return result.data.contentBanner;
}

export async function getContacts(preview) {
  const result = await fetchAPI(
    `{ 
      contacts: allContact
      {
        results {
          title
          contactName
          email
          phone
        }
      }
    }`
  );
  return result.data.contacts;
}

export async function getLinks(preview) {
  const result = await fetchAPI(
    `{ 
      links: allFooterLink (first:50) 
      {
        results {
          section
          url
          displayText
        }
      }
    }`
  );
  return result.data.links;
}
