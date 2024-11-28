class Response {
    constructor(status, message, data = null) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    success(res) {
        return res.status(200).json({
            success: true,
            message: this.message ?? "Successful!(response.js)",
            data: this.data
        })
    }
    
    created(res){
        return res.status(201).json({
            success: true,
            data: this.data,
            message: this.message ?? "Created Succesfully(response.js)"
        })
    }

    error500(res){
        return res.status(this.status ?? 500).json({
            success: false,
            data: this.data,
            message: this.message ?? "İşlem Başarısız!"
        })
    }

    error400(res){
        return res.status(400).json({
            success: false,
            data: this.data,
            message: this.message ?? "İşlem Başarısız!"
        })
    }

    error401(res){
        return res.status(401).json({
            success: false,
            data: this.data,
            message: this.message ?? "Lütfen Oturum Açın!"
        })
    }

    error404(res){
        return res.status(404).json({
            success: false,
            data: this.data,
            message: this.message ?? "İşlem Başarısız!"
        })
    }

    error429(res){
        return res.status(429).json({
            success: false,
            data: this.data,
            message: this.message ?? "Çok Fazla İstek Atıldı!"
        })
    }
}

module.exports = Response;