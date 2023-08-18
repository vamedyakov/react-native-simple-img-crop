#import <Foundation/Foundation.h>

@interface RNCImageUtils : NSObject

+ (BOOL)ensureDirExistsWithPath:(NSString *)path;
+ (NSString *)generatePathInDirectory:(NSString *)directory withExtension:(NSString *)extension;
+ (NSString *)cacheDirectoryPath;
+ (NSString *)writeImage:(NSData *)image toPath:(NSString *)path error:(NSError **)error;

@end
