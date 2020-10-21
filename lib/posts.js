import fs from "fs";
import matter from "gray-matter";
import path from "path";
import remark from "remark";
import html from "remark-html";
import unwrapImages from "remark-unwrap-images";

export function getSortedPostsData(directory) {
  // Get file names under /posts
  const postsDirectory = path.join("public/posts/", directory);

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date <= b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(directory) {
  const fileNames = fs.readdirSync(path.join("public/posts/", directory));

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id, directory) {
  const filePath = path.join("public/posts/", directory, `${id}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(unwrapImages)
    .use(html, { sanitize: true })
    .process(matterResult.content);
  const contentHTML = processedContent.toString();
  return {
    id,
    contentHTML,
    ...matterResult,
  };
}
