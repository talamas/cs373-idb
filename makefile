FILES :=                     \
		.gitignore               \
		.travis.yml              \
		makefile                 \
		apiary.apib              \
		IDB2.log                 \
		app/models.html               \
		app/models.py                \
		app/tests.py                 \
		UML.pdf

check:
	@not_found=0;                                 \
		for i in $(FILES);                            \
		do                                            \
				if [ -e $$i ];                            \
				then                                      \
				    echo "$$i found";                     \
				else                                      \
						echo "$$i NOT FOUND";                 \
						not_found=`expr "$$not_found" + "1"`; \
				fi                                        \
		done;                                         \
		if [ $$not_found -ne 0 ];                     \
		then                                          \
				echo "$$not_found failures";              \
				exit 1;                                   \
		fi;                                           \
		echo "success";

clean:
	rm -f  .coverage
	rm -f  app/*.pyc
	rm -f  tests.tmp

test: 
	python app/tests.py

models.html:
	pydoc -w app.models
	mv app.models.html app/models.html

IDB2.log:
	git log > IDB2.log
