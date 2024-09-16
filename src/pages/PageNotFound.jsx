export default function PageNotFound() {
  return (
    <main className="page-not-found">
      <div className="not-found">
        <h1 className="heading-primary">
          <span className="heading-primary--main">404</span>
          <span className="heading-primary--sub">Page Not Found</span>
        </h1>
        <p className="paragraph">
          Sorry, the page youre looking for doesnt exist. You can always go
          back to the
        </p>
        <a href="/" className="link-home">
            homepage
          </a>
      </div>
    </main>
  );
}
