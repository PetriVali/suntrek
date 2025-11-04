import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-primary underline">Go back home</Link>
    </div>
  );
};

export default NotFound;
