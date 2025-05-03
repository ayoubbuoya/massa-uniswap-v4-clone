import { Args } from '@massalabs/as-types';
import { _burn, _mint, mrc6909Constructor } from '../MRC6909Claims';

export function constructor(_: StaticArray<u8>): void {
  mrc6909Constructor();
}

export function mint(binaryArgs: StaticArray<u8>): void {
  const args = new Args(binaryArgs);

  const to = args.nextString().expect('to argument is missing or invalid');
  const id = args.nextU256().expect('tokenId argument is missing or invalid');
  const amount = args.nextU256().expect('value argument is missing or invalid');

  _mint(to, id, amount);
}

export function burn(binaryArgs: StaticArray<u8>): void {
  const args = new Args(binaryArgs);

  const from = args.nextString().expect('from argument is missing or invalid');
  const id = args.nextU256().expect('tokenId argument is missing or invalid');
  const amount = args.nextU256().expect('value argument is missing or invalid');

  _burn(from, id, amount);
}

export * from '../MRC6909Claims';
