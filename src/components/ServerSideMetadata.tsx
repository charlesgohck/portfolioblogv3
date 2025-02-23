export default function ServerSideMetadata({ title, description, favicon }: { title: string, description: string, favicon: string }) {
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
      </>
    );
  }
  