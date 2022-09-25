import SanityClient from "@sanity/client";

export default SanityClient({
    projectId: "4nmy5gzy",
    dataset: "production",
    apiVersion: '2021-08-31',
    token: '',
    useCdn: true,
})