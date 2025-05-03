import { Args, stringToBytes } from '@massalabs/as-types';
import {
  changeCallStack,
  resetStorage,
  setDeployContext,
  Storage,
} from '@massalabs/massa-as-sdk';
import { mrc6909Constructor, ownerAddress } from '../contracts/MRC6909Claims';

// address of the contract set in vm-mock. must match with contractAddr of @massalabs/massa-as-sdk/vm-mock/vm.js
const contractAddress = 'AS12BqZEQ6sByhRLyEuf0YbQmcF2PsDdkNNG1akBJu9XcjZA1eT';

const user1Address = 'AU12Yd4kCcsizeeTEK9AZyBnuJNZ1cpp99XfCZgzS77ZKnwTFMpVE';

const user2Address = 'AU12fyoNgQ8yjD4KgrkuEMKnGysTaUdK3HueGRjLs8jvRWmwenVLV';

function switchUser(user: string): void {
  changeCallStack(user + ' , ' + contractAddress);
}

beforeEach(() => {
  switchUser(user1Address);
  resetStorage();
  setDeployContext(user1Address);
  mrc6909Constructor();
});

describe('Initialization', () => {
  test('Owner is set to the deployer', () =>
    expect(ownerAddress(new Args().serialize())).toStrictEqual(
      stringToBytes(user1Address),
    ));
});
