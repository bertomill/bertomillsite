const MEDIUM_RSS_URL = 'https://medium.com/feed/@robertmill'; // Ensure this is correct
const RSS2JSON_URL = 'https://api.rss2json.com/v1/api.json';

export const fetchMediumArticles = async () => {
  try {
    const response = await fetch(`${RSS2JSON_URL}?rss_url=${encodeURIComponent(MEDIUM_RSS_URL)}`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch articles: ${response.status} - ${errorText}`);
    }
    const data = await response.json();
    if (data.status !== 'ok') {
      throw new Error(`Failed to fetch articles: ${data.message}`);
    }
    return data.items.map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description.length > 200 ? item.description.substring(0, 200) + '...' : item.description,
      fullDescription: item.description
    }));
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    throw error;
  }
};
