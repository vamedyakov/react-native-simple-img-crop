
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSimpleImgCropSpec.h"

@interface SimpleImgCrop : NSObject <NativeSimpleImgCropSpec>
#else
#import <React/RCTBridgeModule.h>

@interface SimpleImgCrop : NSObject <RCTBridgeModule>
#endif

@end
