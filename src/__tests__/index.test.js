export const cropImage = jest.fn((uri, cropData) =>
  Promise.resolve('croppedImageUri')
);

describe('cropImage', () => {
  it('should correctly crop an image', async () => {
    const uri = 'testImageUri';
    const cropData = {
      offset: { x: 0, y: 0 },
      size: { width: 100, height: 100 },
    };

    const result = await cropImage(uri, cropData);

    expect(result).toBe('croppedImageUri');
    expect(cropImage).toHaveBeenCalledWith(uri, cropData); // Используйте cropImage из mock-а
  });
});
