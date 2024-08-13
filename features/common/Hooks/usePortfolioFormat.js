export const usePortfolioFormat = (portfolio) => {
   const photo = portfolio.image;
   const title = portfolio.title;
   const name = portfolio.artist.name;
 return {
   photo,
   title, 
   name
    
 };
};

