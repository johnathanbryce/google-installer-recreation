import React from "react";
import classes from "../UI/ContentCard.module.css";

/* Created re-usable ContentCard in case more languages need to be added */

function ContentCard({
  moreInfo,
  externalLink,
  language,
  installCommand,
  gradle,
  sbt,
}) {
  /* return for Java  */
  if (language === "Java") {
    return (
      <div>
        <div className={classes.content}>
          <p>
            {moreInfo}
            <a href={externalLink} target="_blank" rel="noreferrer">
              Setting Up A {language} Development Environment.
            </a>
          </p>
          <p>
            If you are using Maven, add the following to your pom.xml file. For
            more information about BOMs, see The Google Cloud Platform Libraries
            BOM.
          </p>
        </div>

        <div className={classes.installContainer}>
          <code> {installCommand} </code>
        </div>

        <div className={classes.content}>
          <p>
            If you are using Gradle, add the following to your dependencies:
          </p>
        </div>
        <div className={classes.installContainer}>
          <code> {gradle} </code>
        </div>

        <div className={classes.content}>
          <p>If you are using sbt, add the following to your dependencies:</p>
        </div>

        <div className={classes.installContainer}>
          <code> {sbt} </code>
        </div>

        <div className={classes.content}>
          <p>
            If you're using Visual Studio Code, IntelliJ, or Eclipse, you can
            add client libraries to your project using the following IDE
            plugins:
          </p>
          <ul>
            <li>
              <a
                href="https://cloud.google.com/code/docs/vscode/client-libraries"
                target="_blank"
                rel="noreferrer"
              >
                Cloud Code for VSCode
              </a>
            </li>
            <li>
              <a
                href="https://cloud.google.com/code/docs/intellij/client-libraries"
                target="_blank"
                rel="noreferrer"
              >
                Cloud Code for IntelliJ
              </a>
            </li>
            <li>
              <a
                href="https://cloud.google.com/eclipse/docs/libraries"
                target="_blank"
                rel="noreferrer"
              >
                Cloud Tools for Eclipse
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p>
            <strong>Note: </strong> Cloud Java client libraries do not currently
            support Android.
          </p>
        </div>
      </div>
    );
  }

  /* return for PHP "on Google Cloud" */
  if (language === "PHP") {
    return (
      <div>
        <div className={classes.content}>
          <p>
            {moreInfo}

            <a href={externalLink} target="_blank" rel="noreferrer">
              Using {language} on Google Cloud.
            </a>
          </p>
        </div>

        <div className={classes.installContainer}>
          <code>{installCommand}</code>
        </div>
      </div>
    );
  }

  /*default return for "Setting up a {language} Development Enviromnent" */
  return (
    <div>
      <div className={classes.content}>
        <p>
          {moreInfo}
          <a href={externalLink} target="_blank" rel="noreferrer">
            Setting Up A {language} Development Environment.
          </a>
        </p>
      </div>
      <div className={classes.installContainer}>
        <code>{installCommand}</code>
      </div>
    </div>
  );
}

export default ContentCard;
