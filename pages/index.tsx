import type { GetServerSideProps, NextPage } from "next";
import BlogPosts from "../components/BlogPosts";
import CurrenciesList from "../components/CurrenciesList";
import Filters from "../components/Filters";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Table from "../components/Table";

export interface IServerSideProps {
  tableData: {
    exchange: string;
    price: string;
    volume_AUD: string;
    volume_BTC: string;
    features: string[];
  }[];
  blogPosts: {
    title: string;
    description: string;
  }[];
}

const Home: NextPage<IServerSideProps> = ({ tableData, blogPosts }) => {
  return (
    <div className="container">
      <div className="app-header">
        <Header />
        <Hero />
        <Filters />
        <CurrenciesList />
        <Table data={tableData} />
        <BlogPosts blogPosts={blogPosts} />
        <GetInTouch />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const tableData = [
    {
      exchange: "TimeX",
      price: "14,721.55 AUD",
      volume_AUD: "1,727,333.17",
      volume_BTC: "121.281",
      features: [
        "Instant Verification",
        "Two-factor Authentication",
        "Affiliate Program",
        "Accept fiat currency",
      ],
    },
    {
      exchange: "Independent Reserve",
      price: "14,680.01 AUD",
      volume_AUD: "1,727,333.17",
      volume_BTC: "121.281",
      features: ["Instant Verification", "Two-factor Authentication"],
    },
    {
      exchange: "BTC markets",
      price: "14,680.01 AUD",
      volume_AUD: "1,727,333.17",
      volume_BTC: "121.281",
      features: ["Affiliate Program"],
    },
    {
      exchange: "CoinJar",
      price: "14,680.01 AUD",
      volume_AUD: "1,727,333.17",
      volume_BTC: "121.281",
      features: [
        "Instant Verification",
        "Two-factor Authentication",
        "Affiliate Program",
      ],
    },
    {
      exchange: "CoinSpot",
      price: "14,680.01 AUD",
      volume_AUD: "1,727,333.17",
      volume_BTC: "121.281",
      features: [
        "Instant Verification",
        "Two-factor Authentication",
        "Affiliate Program",
      ],
    },
    {
      exchange: "ACX Exchange",
      price: "14,680.01 AUD",
      volume_AUD: "1,727,333.17",
      volume_BTC: "121.281",
      features: [
        "Instant Verification",
        "Two-factor Authentication",
        "Affiliate Program",
      ],
    },
    {
      exchange: "Swyftx",
      price: "14,680.01 AUD",
      volume_AUD: "1,727,333.17",
      volume_BTC: "121.281",
      features: [
        "Instant Verification",
        "Two-factor Authentication",
        "Affiliate Program",
      ],
    },
  ];
  const blogPosts = [
    {
      title: "Australia releases blockchain roadmap",
      description:
        "The report is a very welcome development, and is broadly positive about blockchain and the possibilities it brings.",
    },
    {
      title: "Salaries for blockchain specialists in 2020",
      description:
        "The highest-paying crypto jobs include blockchain developers, data scientists and marketing professionals.",
    },

    {
      title: "What does 2020 hold for the blockchain industry?",
      description:
        "Before we give a forecast for 2020, we will give an overview of the employment situation in the blockchain industry in 2019.",
    },

    {
      title: "Keeping your crypto safe: basic security precautions",
      description:
        "Here are 15 of our top recommendations for making sure you are not the victim of a crypto hack or lost funds.",
    },
  ];

  return { props: { tableData, blogPosts } };
};
