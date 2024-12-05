import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageV2Cta extends Struct.ComponentSchema {
  collectionName: 'components_homepage_v2_ctas';
  info: {
    displayName: 'CTA';
    icon: 'play';
  };
  attributes: {
    sub_title: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageV2Hero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_v2_heroes';
  info: {
    displayName: 'Hero';
    icon: 'house';
  };
  attributes: {
    sub_title: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageV2ServicesV2 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_v2_services_v2s';
  info: {
    description: '';
    displayName: 'Services-v2';
    icon: 'server';
  };
  attributes: {
    description: Schema.Attribute.String;
    features: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'house';
  };
  attributes: {
    header1: Schema.Attribute.String & Schema.Attribute.Required;
    header2: Schema.Attribute.String & Schema.Attribute.Required;
    header3: Schema.Attribute.String & Schema.Attribute.Required;
    hero_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    sub_header: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageProducts extends Struct.ComponentSchema {
  collectionName: 'components_homepage_products';
  info: {
    displayName: 'Products';
    icon: 'folder';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    thumbnail: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageServices extends Struct.ComponentSchema {
  collectionName: 'components_homepage_services';
  info: {
    displayName: 'Services';
    icon: 'dashboard';
  };
  attributes: {
    description1: Schema.Attribute.Text & Schema.Attribute.Required;
    description2: Schema.Attribute.Text & Schema.Attribute.Required;
    header1: Schema.Attribute.String & Schema.Attribute.Required;
    header2: Schema.Attribute.String & Schema.Attribute.Required;
    image1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    sub_header1: Schema.Attribute.String & Schema.Attribute.Required;
    sub_header2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageTabItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_tab_items';
  info: {
    displayName: 'TabItem';
    icon: 'bulletList';
  };
  attributes: {
    caption: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
    tab: Schema.Attribute.Enumeration<['Industries', 'Use Cases']> &
      Schema.Attribute.Required;
  };
}

export interface HomepageValueProposition extends Struct.ComponentSchema {
  collectionName: 'components_homepage_value_propositions';
  info: {
    description: '';
    displayName: 'ValueProposition';
    icon: 'dashboard';
  };
  attributes: {
    description1: Schema.Attribute.Text & Schema.Attribute.Required;
    description2: Schema.Attribute.Text & Schema.Attribute.Required;
    description3: Schema.Attribute.Text & Schema.Attribute.Required;
    description4: Schema.Attribute.Text & Schema.Attribute.Required;
    header1: Schema.Attribute.String & Schema.Attribute.Required;
    header2: Schema.Attribute.String & Schema.Attribute.Required;
    header3: Schema.Attribute.String & Schema.Attribute.Required;
    header4: Schema.Attribute.String & Schema.Attribute.Required;
    sub_title: Schema.Attribute.String & Schema.Attribute.Required;
    svg1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    svg2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    svg3: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    svg4: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage-v2.cta': HomepageV2Cta;
      'homepage-v2.hero': HomepageV2Hero;
      'homepage-v2.services-v2': HomepageV2ServicesV2;
      'homepage.hero': HomepageHero;
      'homepage.products': HomepageProducts;
      'homepage.services': HomepageServices;
      'homepage.tab-item': HomepageTabItem;
      'homepage.value-proposition': HomepageValueProposition;
    }
  }
}
