"use server";

import * as cheerio from "cheerio";

export async function scraperAction(link: string) {
  const response = await fetch(link);

  const htmlString = await response.text();
  //   console.log("string: ", htmlString);

  const $ = cheerio.load(htmlString);
  const title = $("title").text();
  const mainTitle = title.split("-");
  console.log("title: ", mainTitle[0]);
}
