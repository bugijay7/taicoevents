import activation01 from '../assets/taico/activation-01.jpg'
import activation02 from '../assets/taico/activation-02.jpg'
import branding01 from '../assets/taico/branding-01.jpg'
import branding02 from '../assets/taico/branding-02.jpg'
import corporate01 from '../assets/taico/corporate-01.jpg'
import corporate02 from '../assets/taico/corporate-02.jpg'
import decor01 from '../assets/taico/decor-01.jpg'
import decor02 from '../assets/taico/decor-02.jpg'
import hero01 from '../assets/taico/hero-01.jpg'
import hero02 from '../assets/taico/hero-02.jpg'
import social01 from '../assets/taico/social-01.jpg'
import social02 from '../assets/taico/social-02.jpg'

export const taicoAssets = {
  hero: [hero01, hero02],
  intro: branding01,
  corporate: [corporate01, corporate02],
  activation: [activation01, activation02],
  branding: [branding01, branding02],
  social: [social01, social02],
  decor: [decor01, decor02],
  work: [corporate01, activation01, branding02, social01],
}

export const services = [
  { number: '01', title: 'Corporate events', description: 'Clear thinking, polished production and room for people to connect.', image: taicoAssets.corporate[0], list: 'Conferences · Galas · Launches · AGMs' },
  { number: '02', title: 'Brand activations', description: 'Promotional campaigns and live experiences that move your audience.', image: taicoAssets.activation[0], list: 'Activations · Campaigns · Environments' },
  { number: '03', title: 'Branding & merchandise', description: 'The considered details that make your brand present in every room.', image: taicoAssets.branding[0], list: 'Apparel · Gifts · Displays · Event branding' },
  { number: '04', title: 'Decor & styling', description: 'Atmosphere, colour and spatial rhythm shaped around your moment.', image: taicoAssets.decor[0], list: 'Tents · Florals · Tablescapes · Stages' },
]

export const principles = [
  ['01', 'Strategic execution', 'We align every event, activation or branding campaign with your business objectives.'],
  ['02', 'Creative excellence', 'Fresh ideas that help brands stand out while creating memorable experiences.'],
  ['03', 'Timely delivery', 'Professional execution within strict timelines without compromising quality.'],
  ['04', 'Corporate professionalism', 'High professional standards from communication through execution.'],
  ['05', 'Scalable event solutions', 'From intimate executive events to large-scale activation campaigns.'],
  ['06', 'Nationwide coordination', 'Strong logistics planning and reliable vendor coordination across Kenya.'],
]