import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
    private readonly data = {
        Categories : ["Electronics", "Clothes"]
    }

    getCategories() {
        return this.data.Categories;
    }
}
