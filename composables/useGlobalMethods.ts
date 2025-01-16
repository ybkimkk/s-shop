// composables/useGlobalMethods.ts
export const useGlobalMethods = () => {
    const captcha = async () : Promise<boolean> => {
        return new Promise((resolve, reject) => {
            initGeetest4({
                captchaId: 'd63112eb596e395f641dc3b2081dc078',
                product: 'bind',
                riskType: 'slide'
            }, function (captcha) {
                // captcha为验证码实例
                captcha.onReady(function () {
                }).onSuccess(function () {
                    let result = captcha.getValidate();
                    if (result) {
                        resolve(true); // 验证通过，返回 true
                    } else {
                        reject(false); // 验证失败，返回 false
                    }

                }).onError(function () {
                    reject(false);
                })
                captcha.showCaptcha();
            });
        });
    }

    return {captcha};
};
