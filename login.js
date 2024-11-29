// 密码设置
const correctPassword = "4586"; // 原密码保持一致
const redirectURL = "miyao.html"; // 保持原功能跳转链接

// 表单提交事件
document.getElementById("password-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const userInput = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");

    if (userInput === correctPassword) {
        // 密码正确，跳转到密钥页面
        window.location.href = redirectURL;
    } else {
        // 密码错误，显示提示信息
        errorMessage.style.display = "block";
    }
});