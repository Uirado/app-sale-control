import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseModel } from 'app/models/base.model';

export abstract class AbstractDatabaseService<T extends BaseModel> {
  protected collection: AngularFireList<T>;

  constructor(
    protected readonly documentPath: string,
    protected readonly database: AngularFireDatabase) {
    this.collection = database.list(documentPath);
  }

  public selectList(): Observable<T[]> {
    return this.collection.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ id: c.key, ...c.payload.val() }))),
    );
  }

  public selectEntity(id: string) {
    return this.database.object(`${this.documentPath}/${id}`).snapshotChanges().pipe(
      map(c => {
        if (!c.key) {
          throw new Error('Entity not found');
        }

        return { id: c.key, ...c.payload.val() };
      }),
    );
  }

  public add(keyPath: T): void {
    this.collection.push(keyPath);
  }

  public remove(id: string): void {
    this.collection.remove(id);
  }

  public update(keyPath: T) {
    this.collection.update(keyPath.id, keyPath);
  }
}
