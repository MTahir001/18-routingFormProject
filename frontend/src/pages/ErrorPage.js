import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
  const error = useRouteError();
  const message = error.data.message;
  const status = error.status;
  return (
    <PageContent title="An error occurred">
      <p>{message}</p>
    </PageContent>
  );
}
