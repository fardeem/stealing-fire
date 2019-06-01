module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('assets');
 
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