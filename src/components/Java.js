import React from "react";
import ContentCard from "../UI/ContentCard";

export default function Java() {
  return (
    <div>
      <ContentCard
        moreInfo="For more information, see "
        language="Java"
        externalLink="https://cloud.google.com/php/docs"
        installCommand="<dependencyManagement>
        <dependencies>
          <dependency>
            <groupId>com.google.cloud</groupId>
            <artifactId>libraries-bom</artifactId>
            <version>24.4.0</version>
            <type>pom</type>
            <scope>import</scope>
          </dependency>
        </dependencies>
      </dependencyManagement>
      
      <dependencies>
        <dependency>
            <groupId>org.json</groupId>
            <artifactId>json</artifactId>
            <version>20220320</version>
        </dependency>
        <dependency>
          <groupId>com.google.cloud</groupId>
          <artifactId>google-cloud-speech</artifactId>
        </dependency>
      </dependencies>"
        gradle="implementation platform('com.google.cloud:libraries-bom:25.0.0')
 
        implementation 'com.google.cloud:google-cloud-speech'"
        sbt="libraryDependencies += com.google.cloud % google-cloud-speech % 2.2.11"
      />
    </div>
  );
}
