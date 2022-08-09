function UsingInitialProps({ stars }) {
    return <div>Next stars: {stars}</div>
  }
  
  UsingInitialProps.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    console.log("stargazers_count...",json.stargazers_count);
    return { stars: json.stargazers_count }
  }
  
  export default UsingInitialProps