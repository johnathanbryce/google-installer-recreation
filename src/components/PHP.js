import React from "react";
import ContentCard from "../UI/ContentCard";

export default function PHP() {
  return (
    <div>
      <ContentCard
        moreInfo="For more information, see "
        language="PHP"
        externalLink="https://cloud.google.com/php/docs"
        installCommand="composer require google/apiclient"
      />
    </div>
  );
}
