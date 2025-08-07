"use client";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "next-share";
import CommonMeta from "./meta";
import { useEffect, useState } from "react";

const SocialShare = ({
  url = "https://frontprod.ideeza.com/user/dashboard/project/2635",
  title = "Check this out!",
}) => {
  const [domain, setDomain] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const domain = window.location.href;
      console.log("domain", domain);
      setDomain(domain); // e.g. "example.com"
    }
  }, []);

  return (
    <div className="flex gap-2">
      <CommonMeta />
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <FacebookShareButton url={"https://yourwebsite.com"} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <FacebookShareButton url={domain} quote={title}>
        <FacebookIcon size={32} round /> 2
      </FacebookShareButton>

      <TwitterShareButton url={domain} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton url={domain}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <WhatsappShareButton url={domain}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
