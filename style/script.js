const senha = document.querySelector('#password');
	const btn = document.querySelector('#eyeSvg');

	eyeSvg.onclick = () =>
	{
		if (senha.type === 'password') 
		{
			password.type = 'text'
			btn.src = 'images/eyeclosed.png'
		}
		else
		{
			password.type = 'password'
			btn.src = 'images/eye.svg'
		}
}