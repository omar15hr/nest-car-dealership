import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {

  populateDB() {
    return 'This could be seeding your database';
  }

}
