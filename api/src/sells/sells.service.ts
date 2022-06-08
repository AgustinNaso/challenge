import { Injectable } from '@nestjs/common';

@Injectable()
export class SellsService {
    private readonly data = {
        categories: {
            Electronics: {
                products: {
                    Computers: {
                        brands: {
                                Apple : {
                                    sells : [100, 120, 101, 89.9]
                                },
                                HP : {
                                    sells : [91, 120, 101, 182.35]
                                },
                                Asus : {
                                    sells : [102, 220, 131, 81]
                                }
                            }
                        },
                    Headsets: {
                        brands: {
                                Razer : {
                                    sells : [88, 221, 201, 122.2]
                                },
                                JBL : {
                                    sells : [221, 120, 131, 332]
                                }
                        }
                    }
                }
            },
            Clothes: {
                products : {
                    Pants: {
                        brands: {
                            Adidas : {
                                sells : [132, 221, 201, 400.2]
                            },
                            Nike : {
                                sells : [102, 131, 135, 90]
                            }
                        }
                    },
                    Sneakers: {
                        brands:{
                            Puma : {
                                sells : [221, 201, 211, 210.9]
                            },
                            Nike : {
                                sells : [99, 302, 235, 190]
                            },
                            Asics : {
                                sells : [321, 431, 132, 290]
                            }
                        }
                    }
                }
            }
        }
    }
    getSells(category: string, product: string, brand: string) {
        if(category && product && brand)
            return this.data.categories[category].products[product].brands[brand].sells;
        return [];
    }
}
