<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
        <img src="" alt="login">
    </a>
    <a id="custom-login-btn" @click="kakaoLogout()">
        <img src="" alt="logout">
    </a>
  </div>
</template>

<script>
export default {
    methods: {
        kakaoLogin(){
            window.Kakao.Auth.login({
                scope : 'profile_nickname, account_email',
                success : this.getKakaoAccount,
            });
        },
        getKakaoAccount(){
            window.Kakao.API.request({
                url:'/v2/user/me',
                success:res=>{
                    const kakao_account = res.kakao_account;
                    const nickname = kakao_account.profile.nickname;
                    const email = kakao_account.email;
                    console.log(nickname);
                    console.log(email);
                    alert('로그인성공')
                },
                fail:error=>{
                    console.log(error);
                }
            });
        },
        kakaoLogout(){
            window.Kakao.Auth.logout((response)=>{
                console.log("response :" + response);
            });
        }
    }
}
</script>

