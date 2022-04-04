import React from "react";
import ContentCard from "../UI/ContentCard";

export default function Ruby() {
  return (
    <div>
      {" "}
      <ContentCard
        moreInfo="For more information, see: "
        language="Ruby"
        externalLink="https://cloud.google.com/ruby/docs/setup"
        installCommand="gem install google-api-client"
      />
    </div>
  );
}
