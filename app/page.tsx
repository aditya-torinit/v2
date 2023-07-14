import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{process?.env?.TITLE || "title"}</h1>
        <span>
          VERCEL_URL {process?.env?.NEXT_PUBLIC_APP_URL || "not-found"}{" "}
        </span>
         <span>
          NEXT_PUBLIC_APP_ENV {process?.env?.NEXT_PUBLIC_APP_ENV || "not-found"}{" "}
        </span>
        <span>
          NEXT_PUBLIC_APP_URL {process?.env?.NEXT_PUBLIC_APP_URL || "not-found"}{" "}
        </span>

      <br/>
      <br/>
      <br/>
           <span>
          NEXT_PUBLIC_VERCEL_URL {process?.env?.NEXT_PUBLIC_VERCEL_URL || "not-found"}{" "}
        </span>
           <span>
          VERCEL_URL {process?.env?.VERCEL_URL || "not-found"}{" "}
        </span>


        
        <span>
          V1 {"  --- > "} {process?.env?.V1 || "not-found"}
        </span>
        <span>
          V2 {"  --- > "} {process?.env?.V2 || "not-found"}
        </span>
        <span>
          V3 {"  --- > "} {process?.env?.V3 || "not-found"}
        </span>
        <span>
          V4 {"  --- > "} {process?.env?.V4 || "not-found"}
        </span>
      </div>
    </main>
  );
}
