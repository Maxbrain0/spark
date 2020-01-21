import Logout from '../src/components/authenticate/Logout';
import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import {NextPage} from 'next';

interface DashboardProps {
  user: string;
}

const Dashboard: NextPage<DashboardProps> = ({user}) => {
  return (
    <div className="uk-container uk-margin-large-top">
      <DefaultSeo {...Object.assign(SEO, {
        title: `${user} - dashboard`,
      })}
      />
      <h1>Hello {user}!</h1>
      <Logout/>
    </div>
  );
};

Dashboard.getInitialProps = async () => {
  const res = await fetch(`${process.env.HOST}api/authenticate/auth`, {
    method: 'POST',
  });
  const data = await res.json();
  console.log(data);
  return {
    user: data.user,
  };
};

export default Dashboard;
