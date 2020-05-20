import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  offers = [
    {id: 1, icon: '../assets/images/001-process.svg' ,       title: "SOCIAL MEDIA MANAGEMENT", description: `Perfect for growing your brand’s social community and engage with the right audience. We manage everything from curation of content to management of comments and everything in between.`},
    {id: 2, icon: '../assets/images/002-social-media.svg',   title: "SOCIALS GROWTH CAMPAIGN", description: `Our social growth campaign will have your socials come alive. With constant growth and engagement you will be sure to have the thriving you’ve been looking for.`},
    {id: 3, icon: '../assets/images/003-responsive.svg',     title: "BRANDING & MEDIA", description: `Done right, branding offers a company an edge over the competition. So what exactly is branding, and why is it important for companies to integrate a well-rounded branding and media strategy?`},
    {id: 4, icon: '../assets/images/004-social-media-1.svg', title: "INFLUENCER MARKETING", description: `We will pair your business with influencers that speak to your audience. Influencer Marketing is the most effective way to reach a loyal audience.`},
    {id: 4, icon: '../assets/images/007-analysis.svg',       title: "SOCIAL MEDIA PAID ADVERTISING", description: `Our ad campaigns will bring you the results your looking for. From brand awareness campaigns to lead funnels, we have got the tools to create the right ads for your business.`},
    {id: 4, icon: '../assets/images/008-computer.svg',       title: "CONTENT MARKETING SERVICES", description: `We can create and provide your company with the best content marketing for your socials to improve online presence. Creating valuable and quality content helps boost conversions and improve customer retention.`}
  ];

  sliderItems = [
    {id: 1,isactive: false, title : "Gold Package",   body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit", price : "$ 140"},
    {id: 2,isactive: false, title: "Platinum Package",body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus.", price: "$ 240"},
    {id:3 ,isactive: false,title: "Silver Package"  ,body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit", price: "$ 240"},
    {id:4, isactive: false,title : "Gold Package_1",   body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit", price : "$ 140"},
  ]

  constructor() { }
  public getOffers():Array<{title: string, description:string}>{
    return this.offers;
  }

  public getsliderItems():Array<{title: string, body: string, price:string}>{
    return this.sliderItems;
  }
}
