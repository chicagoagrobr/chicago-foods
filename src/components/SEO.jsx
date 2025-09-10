import { Helmet } from "react-helmet";

export default function SEO({
  title,
  description,
  url,
  image,
  type = "website"
}) {
  const defaultImage = "https://chicagofoods.com.br/cf_512_square_adjusted.png";
  const finalUrl = url || "https://chicagofoods.com.br/";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={finalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}
