
    var parentId = container;
<input type="text" name="name" value="Имя автора" onblur="if(this.value.length == 0) this.value = 'Имя автора'" onfocus="if(this.value == 'Имя автора') this.value = '' "/>

<input type="text" name="email" value="name@example.com" onblur="if(this.value.length == 0) this.value = 'name@example.com'" onfocus="if(this.value == 'name@example.com') this.value = '' " />

<textarea name="msg" onblur="if(this.value.length == 0) this.value = 'Текст сообщения'" onfocus="if(this.value == 'Текст сообщения') this.value=''">Текст сообщения</textarea>
