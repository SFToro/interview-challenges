export interface MercadoLibreRes {
  site_id: SiteID;
  seller: Seller;
  country_default_time_zone: string;
  paging: Paging;
  results: Prod[];
  sort: Sort;
  available_sorts: Sort[];
  filters: any[];
  available_filters: AvailableFilter[];
  pads_info: PadsInfo;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id: string;
  name: string;
  results: number;
}

export interface Sort {
  id: CityIDEnum;
  name: CityNameEnum;
}

export enum CityIDEnum {
  Ar = "AR",
  ArC = "AR-C",
  PriceAsc = "price_asc",
  PriceDesc = "price_desc",
  Relevance = "relevance",
  TUXBQlJFQzkyMTVa = "TUxBQlJFQzkyMTVa",
}

export enum CityNameEnum {
  Argentina = "Argentina",
  CapitalFederal = "Capital Federal",
  MayorPrecio = "Mayor precio",
  MenorPrecio = "Menor precio",
  MásRelevantes = "Más relevantes",
  Recoleta = "Recoleta",
}

export interface PadsInfo {
  tracelog: string[];
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Prod {
  id: string;
  title: string;
  condition: Condition;
  thumbnail_id: string;
  catalog_product_id: null | string;
  listing_type_id: ListingTypeID;
  permalink: string;
  buying_mode: BuyingMode;
  site_id: SiteID;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: CurrencyID;
  order_backend: number;
  price: number;
  original_price: number | null;
  sale_price: null;
  sold_quantity: number;
  available_quantity: number;
  official_store_id: number;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: ResultTag[];
  shipping: Shipping;
  stop_time: Date;
  seller: Seller;
  seller_address: SellerAddress;
  address: Address;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: any[];
  inventory_id: null | string;
  differential_pricing?: DifferentialPricing;
  official_store_name?: string;
  variation_filters?: string[];
  variations_data?: Record<string, VariationsDatum>;
}

export interface Address {
  state_id: CityIDEnum;
  state_name: CityNameEnum;
  city_id: CityIDEnum;
  city_name: CityNameEnum;
}

export interface Attribute {
  id: AttributeID;
  name: AttributeName;
  value_id: null | string;
  value_name: string;
  attribute_group_id: AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  value_struct: Struct | null;
  values: AttributeValue[];
  source: number;
  value_type: ValueType;
}

export enum AttributeGroupID {
  Main = "MAIN",
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Otros = "Otros",
  Principales = "Principales",
}

export enum AttributeID {
  AlphanumericModel = "ALPHANUMERIC_MODEL",
  Brand = "BRAND",
  DetailedModel = "DETAILED_MODEL",
  GPUModel = "GPU_MODEL",
  ItemCondition = "ITEM_CONDITION",
  Line = "LINE",
  MaxSpeakersPower = "MAX_SPEAKERS_POWER",
  Model = "MODEL",
  PackageLength = "PACKAGE_LENGTH",
  PackageWeight = "PACKAGE_WEIGHT",
  PeakPower = "PEAK_POWER",
  ProcessorBrand = "PROCESSOR_BRAND",
  ProcessorLine = "PROCESSOR_LINE",
  ProcessorModel = "PROCESSOR_MODEL",
  RatedPower = "RATED_POWER",
  Submodel = "SUBMODEL",
  UnitsPerPackage = "UNITS_PER_PACKAGE",
  Weight = "WEIGHT",
}

export enum AttributeName {
  CondiciónDelÍtem = "Condición del ítem",
  LargoDelPaquete = "Largo del paquete",
  Línea = "Línea",
  LíneaDelProcesador = "Línea del procesador",
  Marca = "Marca",
  MarcaDelProcesador = "Marca del procesador",
  Modelo = "Modelo",
  ModeloAlfanumérico = "Modelo alfanumérico",
  ModeloDeGPU = "Modelo de GPU",
  ModeloDelProcesador = "Modelo del procesador",
  ModeloDetallado = "Modelo detallado",
  Peso = "Peso",
  PesoDelPaquete = "Peso del paquete",
  PotenciaMáximaDeLosParlantes = "Potencia máxima de los parlantes",
  PotenciaNominal = "Potencia nominal",
  PotenciaPico = "Potencia pico",
  Submodelo = "Submodelo",
  UnidadesPorPaquete = "Unidades por paquete",
}

export interface Struct {
  number: number;
  unit: Unit;
}

export enum Unit {
  CM = "cm",
  G = "g",
  Kg = "kg",
  LB = "lb",
  Va = "VA",
  W = "W",
}

export enum ValueType {
  List = "list",
  Number = "number",
  NumberUnit = "number_unit",
  String = "string",
}

export interface AttributeValue {
  id: null | string;
  name: string;
  struct: Struct | null;
  source: number;
}

export enum BuyingMode {
  BuyItNow = "buy_it_now",
}

export enum Condition {
  New = "new",
}

export enum CurrencyID {
  Ars = "ARS",
}

export interface DifferentialPricing {
  id: number;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: CurrencyID;
}

export enum ListingTypeID {
  GoldPro = "gold_pro",
  GoldSpecial = "gold_special",
}

export interface Seller {
  id: number;
  nickname: Nickname;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: Date;
  tags: SellerTag[];
  car_dealer_logo?: string;
  permalink: string;
  seller_reputation: SellerReputation;
  eshop: Eshop;
}

export interface Eshop {
  eshop_id: number;
  seller: number;
  nick_name: Nickname;
  eshop_status_id: number;
  site_id: SiteID;
  eshop_experience: number;
  eshop_rubro: null;
  eshop_locations: any[];
  eshop_logo_url: string;
}

export enum Nickname {
  Oportutek = "OPORTUTEK",
}

export enum SiteID {
  Mla = "MLA",
}

export interface SellerReputation {
  level_id: LevelID;
  power_seller_status: PowerSellerStatus;
  transactions: Transactions;
  metrics: Metrics;
}

export enum LevelID {
  The5_Green = "5_green",
}

export interface Metrics {
  sales: Sales;
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  cancellations: Cancellations;
}

export interface Cancellations {
  period: CancellationsPeriod;
  rate: number;
  value: number;
}

export enum CancellationsPeriod {
  The60Days = "60 days",
}

export interface Sales {
  period: CancellationsPeriod;
  completed: number;
}

export enum PowerSellerStatus {
  Platinum = "platinum",
}

export interface Transactions {
  canceled: number;
  completed: number;
  period: TransactionsPeriod;
  ratings: Ratings;
  total: number;
}

export enum TransactionsPeriod {
  Historic = "historic",
}

export interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
}

export enum SellerTag {
  Brand = "brand",
  CreditsProfile = "credits_profile",
  Eshop = "eshop",
  LargeSeller = "large_seller",
  MessagesAsSeller = "messages_as_seller",
  Mshops = "mshops",
}

export interface SellerAddress {
  comment: string;
  address_line: string;
  id: null;
  latitude: null;
  longitude: null;
  country: Sort;
  state: Sort;
  city: Sort;
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: LogisticType;
  mode: Mode;
  tags: ShippingTag[];
  benefits: null;
  promise: null;
}

export enum LogisticType {
  CrossDocking = "cross_docking",
  Fulfillment = "fulfillment",
}

export enum Mode {
  Me2 = "me2",
}

export enum ShippingTag {
  Fulfillment = "fulfillment",
  MandatoryFreeShipping = "mandatory_free_shipping",
  SelfServiceIn = "self_service_in",
  SelfServiceOut = "self_service_out",
}

export enum ResultTag {
  AhoraPaidByBuyer = "ahora-paid-by-buyer",
  BestSellerCandidate = "best_seller_candidate",
  BrandVerified = "brand_verified",
  CartEligible = "cart_eligible",
  CatalogListingEligible = "catalog_listing_eligible",
  ChannelFixed = "channel_fixed",
  DealOfTheDay = "deal_of_the_day",
  ExtendedWarrantyEligible = "extended_warranty_eligible",
  GoodQualityPicture = "good_quality_picture",
  GoodQualityThumbnail = "good_quality_thumbnail",
  ImmediatePayment = "immediate_payment",
  IncompleteTechnicalSpecs = "incomplete_technical_specs",
  LoyaltyDiscountEligible = "loyalty_discount_eligible",
  MeliChoiceCandidate = "meli_choice_candidate",
  ModerationPenalty = "moderation_penalty",
  PcjCoFunded = "pcj-co-funded",
  ShippingGuaranteed = "shipping_guaranteed",
  The3XCampaign = "3x_campaign",
}

export interface VariationsDatum {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  inventory_id?: string;
}

// To parse this data:
//
//   import { Convert, Cat } from "./file";
//
//   const cat = Convert.toCat(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface CatRes {
  id: string;
  name: string;
  picture: string;
  permalink: string;
  total_items_in_this_category: number;
  path_from_root: PathFromRoot[];
  children_categories: ChildrenCategory[];
  attribute_types: string;
  settings: CatSettings;
  channels_settings: ChannelsSetting[];
  meta_categ_id: null;
  attributable: boolean;
  date_created: Date;
}

export interface ChannelsSetting {
  channel: string;
  settings: ChannelsSettingSettings;
}

export interface ChannelsSettingSettings {
  minimum_price?: number;
  status?: string;
  buying_modes?: string[];
  immediate_payment?: string;
}

export interface ChildrenCategory {
  id: string;
  name: string;
  total_items_in_this_category: number;
}

export interface PathFromRoot {
  id: string;
  name: string;
}

export interface CatSettings {
  adult_content: boolean;
  buying_allowed: boolean;
  buying_modes: string[];
  catalog_domain: string;
  coverage_areas: string;
  currencies: string[];
  fragile: boolean;
  immediate_payment: string;
  item_conditions: string[];
  items_reviews_allowed: boolean;
  listing_allowed: boolean;
  max_description_length: number;
  max_pictures_per_item: number;
  max_pictures_per_item_var: number;
  max_sub_title_length: number;
  max_title_length: number;
  max_variations_allowed: number;
  maximum_price: null;
  maximum_price_currency: string;
  minimum_price: number;
  minimum_price_currency: string;
  mirror_category: null;
  mirror_master_category: null;
  mirror_slave_categories: any[];
  price: string;
  reservation_allowed: string;
  restrictions: any[];
  rounded_address: boolean;
  seller_contact: string;
  shipping_options: string[];
  shipping_profile: string;
  show_contact_information: boolean;
  simple_shipping: string;
  stock: string;
  sub_vertical: string;
  subscribable: boolean;
  tags: any[];
  vertical: string;
  vip_subdomain: string;
  buyer_protection_programs: string[];
  status: string;
}
