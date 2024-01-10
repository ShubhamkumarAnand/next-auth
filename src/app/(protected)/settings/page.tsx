import { auth } from "~/auth";

const SettingsPage = async () => {
  const sessions = await auth();
  return (
    <>
      <p>Settings Page</p>
      {JSON.stringify(sessions)}
    </>
  );
};

export default SettingsPage;
