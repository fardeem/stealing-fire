module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('site/favicon.ico');
 
  return {
    dir: {
      input: 'site',
      output: 'dist',
      data: 'data',
      includes: 'includes'
    },
    templateFormats : ['njk', 'md', 'html'],
    htmlTemplateEngine : 'njk',
    markdownTemplateEngine : 'njk',
    passthroughFileCopy: true
  };
};