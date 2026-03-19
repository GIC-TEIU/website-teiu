{/*Banner Genérico caso seja necessário a criação de uma página padrão */}
function BannerMaster({title, text}) {
    return (
        <>
            <div class="bg-[url('/assets/img/capa-aboutus.jpg')] bg-cover bg-center h-[90vh] w-screen flex items-center justify-start text-white p-[150px]">
            {title && text && (
                <div className="content-title max-w-[500px] bg-[#00000091] p-4 rounded-sm">
                    <h1 className="text-4xl font-bold mb-4 " >{ title }</h1>
                    <p className="text-[#e1e1e1]" >
                        {text}
                    </p>

                </div>
            )}
            </div>
        </>
    );
}

export default BannerMaster;