<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\Mail;

class ContactService
{
    public function sendEmail(array $data): array
    {
        try {

            $body = "
            Nome: {$data['name']}
            Email: {$data['email']}
            Telefone: {$data['phone']}
            Mensagem: {$data['message']}
                        ";

                        Mail::html("
                        <div style='font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;'>
                            
                            <div style='max-width:600px; margin:0 auto; background:#ffffff; border-radius:10px; padding:20px;'>
                                
                                <h2 style='color:#333;'>📩 Novo contato do site</h2>
                        
                                <p><strong>Nome:</strong> {$data['name']}</p>
                                <p><strong>Email:</strong> {$data['email']}</p>
                                <p><strong>Telefone:</strong> {$data['phone']}</p>
                        
                                <hr style='margin:20px 0;'>
                        
                                <p><strong>Mensagem:</strong></p>
                                <p style='background:#f9f9f9; padding:10px; border-radius:5px;'>
                                    {$data['message']}
                                </p>
                        
                                <hr style='margin:20px 0;'>
                        
                                <p style='font-size:12px; color:#999;'>
                                    Email enviado automaticamente pelo sistema
                                </p>
                        
                            </div>
                        
                        </div>
                        ", function ($message) use ($data) {
                            $message->to($data['email'])
                                    ->replyTo($data['email'], $data['name'])
                                    ->subject('Novo contato do site');
                        });

            return [
                'success' => true,
                'message' => 'Email enviado com sucesso',
                'data' => $data
            ];

        } catch (\Throwable $e) {
            return [
                'success' => false,
                'message' => 'Erro ao enviar email',
                'error' => $e->getMessage()
            ];
        }
    }
}