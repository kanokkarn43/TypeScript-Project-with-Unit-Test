import merge from '../src/merge';

test('Merge function test', () => {
    // Test case 1
    const collection1 = [1, 5, 8];
    const collection2 = [6, 3, 2];
    const collection3 = [4, 7, 9];
    
    const result = merge(collection1, collection2, collection3);
    
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // Test case 2
    const collection4 = [3, 8, 9];
    const collection5 = [7, 5, 1];
    const collection6 = [2, 4, 6];
    const result2 = merge(collection4, collection5, collection6);
    expect(result2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

});