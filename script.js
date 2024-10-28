function isNumber(value) {
    return !isNaN(value) && value.trim() !== "";
}

function calculate() {
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operation = document.querySelector('input[name="operation"]:checked');
    const resultBox = document.getElementById("result");
    const notification = document.getElementById("notification");

    // Xóa thông báo trước đó
    resultBox.value = "";
    notification.innerHTML = "";

    // Kiểm tra dữ liệu nhập
    if (!isNumber(firstNumber)) {
        notification.innerHTML = "Giá trị nhập ở ô Số thứ nhất không phải là số";
        return;
    }
    if (!isNumber(secondNumber)) {
        notification.innerHTML = "Giá trị nhập ở ô Số thứ hai không phải là số";
        return;
    }

    if (!operation) {
        notification.innerHTML = "Vui lòng chọn phép tính";
        return;
    }

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let result;

    switch (operation.value) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                notification.innerHTML = "Không thể chia cho 0";
                return;
            }
            result = num1 / num2;
            break;
        default:
            notification.innerHTML = "Phép tính không hợp lệ";
            return;
    }

    // Hiển thị kết quả
    resultBox.value = result;
}
