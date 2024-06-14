const RSS2JSON_URL = 'https://api.rss2json.com/v1/api.json';
const MEDIUM_RSS_URL = 'https://medium.com/feed/@bertomill'; // Replace with your Medium username

export const fetchMediumArticles = async () => {
  const response = await fetch(`${RSS2JSON_URL}?rss_url=${encodeURIComponent(MEDIUM_RSS_URL)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  const data = await response.json();
  if (data.status !== 'ok') {
    throw new Error('Failed to fetch articles');
  }
  return data.items.map(item => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    description: item.description.length > 200 ? item.description.substring(0, 200) + '...' : item.description,
    fullDescription: item.description
  }));
};
