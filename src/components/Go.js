import React from "react";
import ContentCard from "../UI/ContentCard";

export default function Go() {
  return (
    <div>
      <ContentCard
        moreInfo="For more information, see: "
        language="Go"
        externalLink="https://cloud.google.com/go/docs/setup"
        installCommand="go get cloud.google.com/go/speech/apiv1"
      />
    </div>
  );
}
