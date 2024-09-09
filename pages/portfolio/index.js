import DefaultLayout from '@/features/Layouts/DefaultLayout'
import { Box, Image } from '@chakra-ui/react';
import React from 'react'




// console.log(main_data);
// async function getposts(params) {
//   const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_KEY}&limit=10`;

// const response = await fetch(url ,{
//     cache: "force-cache"
// });
// const feed = await response.json();
// const main_data = feed.data;
// console.log(main_data)
//   }

// export async function loadPosts() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_KEY}&limit=10')
//   const data = await res.json()
//  console.log(data);
 
// 


// export default  function index({main_data}) {
//   return (
//     <DefaultLayout>{main_data}</DefaultLayout>
//   )
// }


export default  function index({feed}) {
  const images = feed.data;
  
  return (
    <DefaultLayout>
            <Box
        padding={4}
        w="100%"
        maxW="900px"
        mx="auto"
        bg="gray.800"
        sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
      >
 
           {
                          
                        images.filter(d => d.media_type === "IMAGE").map((curElem) => {
                              return     <Image
                              key={curElem.id}
                               {...curElem}
                                w="100%"
                                borderRadius="xl"
                                mb={2}
                                d="inline-block"
                                alt="Alt"
                                src={curElem.media_url}
                              />
                          })
                      }
      </Box>
    </DefaultLayout>
  )
}

export  async function getStaticProps() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_KEY}&limit=20`;
  const data = await fetch(url)
  const feed = await data.json();

  return { props: { feed } }
}


