import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-simple-img-crop' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const SimpleImgCrop = NativeModules.SimpleImgCrop
  ? NativeModules.SimpleImgCrop
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

type $Maybe<T> = T | null | undefined;

export type ImageCropData = {
  /**
   * The top-left corner of the cropped image, specified in the original
   * image's coordinate space.
   */
  offset: {
    x: number;
    y: number;
  };
  /**
   * The size (dimensions) of the cropped image, specified in the original
   * image's coordinate space.
   */
  size: {
    width: number;
    height: number;
  };
  /**
   * (Optional) size to scale the cropped image to.
   */
  displaySize?: $Maybe<{
    width: number;
    height: number;
  }>;
  /**
   * (Optional) the resizing mode to use when scaling the image. If the
   * `displaySize` param is not specified, this has no effect.
   */
  resizeMode?: $Maybe<'contain' | 'cover' | 'stretch'>;
};

export function cropImage(
  uri: string,
  cropData: ImageCropData
): Promise<string> {
  return SimpleImgCrop.cropImage(uri, cropData);
}
