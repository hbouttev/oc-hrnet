import { ActionFunctionArgs } from "react-router-dom";

export async function action({ request }: ActionFunctionArgs) {}

export default function RootIndex() {
  return (
    <section>
      <h1 className="flex flex-col items-center content-center text-3xl my-5 font-bold">
        HRnet
      </h1>
      <p className="text-sm">Hello b.</p>
    </section>
  );
}
